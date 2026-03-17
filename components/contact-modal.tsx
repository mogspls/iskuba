"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type ContactMethod = "sms" | "telegram" | "whatsapp" | "email";

type ContactModalContextValue = {
  open: boolean;
  selectedCourse: string | null;
  openForCourse: (course: string) => void;
  close: () => void;
  setSelectedCourse: (course: string) => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
);

const COURSE_GROUPS: Array<{ label: string; items: string[] }> = [
  {
    label: "Experience Programs",
    items: [
      "Bubblemaker",
      "Discover Scuba Diving",
      "Discover Snorkeling",
      "Advanced Snorkeling",
    ],
  },
  {
    label: "Certification Courses",
    items: [
      "Scuba Diving",
      "Open Water Diver",
      "Advanced Open Water Diver",
      "Rescue Diver",
      "Emergency First Response (EFR)",
    ],
  },
  {
    label: "Pro Level Training",
    items: [
      "Divemaster",
      "Specialty Instructor Course",
    ]
  },
  {
    label: "Pro Level Internships",
    items: [
      "Divemaster Internship",
      "Instructor Internship",
    ]
  },
  {
    label: "Leisure Dives",
    items: [
      "Refresher Dive",
    ]
  },
  {
    label: "Others",
    items: [
      "Other inquiries (e.g. The Shack Hideaway, Gear inquiries, etc.)"
    ]
  }
];

const ALL_COURSES = COURSE_GROUPS.flatMap((g) => g.items);

/* ----------------------------- contact targets ---------------------------- */

const CONTACT_PHONE_LOCAL = "09171240520";
const CONTACT_PHONE_INTL = "639171240520"; // for wa.me (no "+")
const CONTACT_PHONE_PLUS = "+639178214826"; // for sms:
const TELEGRAM_USERNAME = "ivanarcosis";

/* -------------------------------- helpers -------------------------------- */

function encode(v: string) {
  return encodeURIComponent(v);
}

function buildMessage(args: {
  course: string;
  name: string;
  email: string;
  body: string;
}) {
  const lines = [
    `Course: ${args.course}`,
    `Name: ${args.name || "-"}`,
    `Email: ${args.email || "-"}`,
    "",
    args.body || "",
  ];
  return lines.join("\n").trim();
}

function buildHref(method: ContactMethod, message: string) {
  switch (method) {
    case "whatsapp":
      return `https://wa.me/${CONTACT_PHONE_INTL}?text=${encode(message)}`;
    case "telegram":
      return `https://t.me/${TELEGRAM_USERNAME}?text=${encode(message)}`;
    case "sms":
      return `sms:${CONTACT_PHONE_PLUS}?body=${encode(message)}`;
    case "email":
      return `mailto:?subject=${encode("Scuba Inquiry")}&body=${encode(message)}`;
  }
}

function methodLabel(method: ContactMethod) {
  switch (method) {
    case "sms":
      return "SMS";
    case "telegram":
      return "Telegram";
    case "whatsapp":
      return "WhatsApp";
    case "email":
      return "Email";
  }
}

/* ----------------------------- validation -------------------------------- */

const EMAIL_RE =
  /^(?!.*\.\.)([A-Z0-9._%+-]{1,64})@([A-Z0-9-]{1,63}\.)+[A-Z]{2,63}$/i;

function validateName(v: string) {
  const t = v.trim();
  if (!t) return "Name is required.";
  if (t.length < 2) return "Name is too short.";
  return "";
}

function validateEmail(v: string) {
  const t = v.trim();
  if (!t) return "Email is required.";
  if (!EMAIL_RE.test(t)) return "Please enter a valid email address.";
  return "";
}

function validateBody(v: string) {
  const t = v.trim();
  if (!t) return "Message is required.";
  if (t.length < 8) return "Message is too short.";
  return "";
}

/**
 * Controlled field with:
 * - validate onBlur (focus-out)
 * - show errors after blur or submit attempt
 * - `dirty` flips true once user types (so we can avoid overwriting seeded body)
 */
function useBlurValidation(validate: (v: string) => string, initial = "") {
  const [value, setValue] = useState<string>(initial);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setValue(e.target.value);
    setDirty(true);
    // Don’t validate while typing; clear displayed error until blur/submit
    if (touched) setError("");
  };

  const onBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  const validateNow = () => {
    const err = validate(value);
    setError(err);
    return err;
  };

  const resetMeta = () => {
    setTouched(false);
    setError("");
    setDirty(false);
  };

  return {
    value,
    setValue,
    touched,
    error,
    dirty,
    onChange,
    onBlur,
    validateNow,
    resetMeta,
  };
}

/* ------------------------------ provider --------------------------------- */

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const value = useMemo<ContactModalContextValue>(
    () => ({
      open,
      selectedCourse,
      openForCourse: (course: string) => {
        setSelectedCourse(course);
        setOpen(true);
      },
      close: () => setOpen(false),
      setSelectedCourse: (course: string) => setSelectedCourse(course),
    }),
    [open, selectedCourse],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModalDialog />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx)
    throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

/* -------------------------------- dialog --------------------------------- */

function ContactModalDialog() {
  const { open, close, selectedCourse, setSelectedCourse } = useContactModal();

  const [course, setCourse] = useState<string>(
    selectedCourse ?? ALL_COURSES[0],
  );
  const [contactMethod, setContactMethod] = useState<ContactMethod>("sms");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const nameField = useBlurValidation(validateName);
  const emailField = useBlurValidation(validateEmail);
  const bodyField = useBlurValidation(validateBody);

  // Reset UI/meta when the modal opens (only when open flips to true)
  React.useEffect(() => {
    if (!open) return;

    setContactMethod("sms");
    setSubmitAttempted(false);

    nameField.resetMeta();
    emailField.resetMeta();
    bodyField.resetMeta();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Keep course in sync + seed body when course changes (e.g., click different DIVE IN button)
  React.useEffect(() => {
    if (!open) return;

    const next =
      selectedCourse && ALL_COURSES.includes(selectedCourse)
        ? selectedCourse
        : ALL_COURSES[0];

    setCourse(next);
    setSelectedCourse(next);

    const seed = `Hi! I'd like to inquire about ${next}.`;

    // ✅ Only overwrite the body if user hasn't typed anything yet
    if (!bodyField.dirty) {
      bodyField.setValue(seed);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, selectedCourse]);

  const message = buildMessage({
    course,
    name: nameField.value,
    email: emailField.value,
    body: bodyField.value,
  });

  const href = buildHref(contactMethod, message);

  // button gating (errors still show only after blur/submit)
  const isValid =
    !validateName(nameField.value) &&
    !validateEmail(emailField.value) &&
    !validateBody(bodyField.value);

  const showNameError =
    !!nameField.error && (nameField.touched || submitAttempted);
  const showEmailError =
    !!emailField.error && (emailField.touched || submitAttempted);
  const showBodyError =
    !!bodyField.error && (bodyField.touched || submitAttempted);

  return (
    <Dialog open={open} onOpenChange={(v: boolean) => (v ? null : close())}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Pick a course, choose a channel, then send your message.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          {/* Course */}
          <div className="grid gap-2">
            <Label>Course</Label>
            <Select
              value={course}
              onValueChange={(v: string) => {
                setCourse(v);
                setSelectedCourse(v);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {COURSE_GROUPS.map((group) => (
                  <SelectGroup key={group.label}>
                    <SelectLabel className="font-bold border-t-solid border-t-black/50 pt-2 block">
                    ---{group.label}---
                    </SelectLabel>
                    {group.items.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>

            {/* Contact method */}
            <div className="grid gap-2">
              <Label>Contact us through</Label>
              <Select
                value={contactMethod}
                onValueChange={(v: string) =>
                  setContactMethod(v as ContactMethod)
                }>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="telegram">Telegram</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                </SelectContent>
              </Select>

              {/* <p className="text-xs text-muted-foreground">
                WhatsApp uses wa.me; Telegram uses t.me; SMS prefills may vary
                by device.
              </p> */}
            </div>
          </div>

          {/* Name + Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label>
                Name <span className="text-red-500">*required</span>
              </Label>
              <Input
                value={nameField.value}
                onChange={nameField.onChange}
                onBlur={nameField.onBlur}
                required
                aria-invalid={showNameError}
                className={
                  showNameError
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {showNameError && (
                <p className="text-xs text-red-500">{nameField.error}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label>
                Email <span className="text-red-500">*required</span>
              </Label>
              <Input
                value={emailField.value}
                onChange={emailField.onChange}
                onBlur={emailField.onBlur}
                type="email"
                required
                aria-invalid={showEmailError}
                className={
                  showEmailError
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }
              />
              {showEmailError && (
                <p className="text-xs text-red-500">{emailField.error}</p>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="grid gap-2">
            <Label>
              Body <span className="text-red-500">*required</span>
            </Label>
            <Textarea
              value={bodyField.value}
              onChange={bodyField.onChange}
              onBlur={bodyField.onBlur}
              rows={6}
              placeholder="Type your message..."
              required
              aria-invalid={showBodyError}
              className={
                showBodyError ? "border-red-500 focus-visible:ring-red-500" : ""
              }
            />
            {showBodyError && (
              <p className="text-xs text-red-500">{bodyField.error}</p>
            )}
          </div>

          {/* Send */}
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={close} type="button">
              Cancel
            </Button>

            <Button
              type="button"
              disabled={!isValid}
              onClick={() => {
                setSubmitAttempted(true);

                const nErr = nameField.validateNow();
                const eErr = emailField.validateNow();
                const bErr = bodyField.validateNow();

                if (nErr || eErr || bErr) return;

                if (contactMethod === "email") window.location.href = href;
                else window.open(href, "_blank", "noopener,noreferrer");

                close();
              }}>
              {`Send via ${methodLabel(contactMethod)}`}
            </Button>
          </div>

        <div className="text-xs text-muted-foreground mt-2">
          WhatsApp/SMS: {CONTACT_PHONE_LOCAL} · Telegram: @{TELEGRAM_USERNAME}
        </div>
      </DialogContent>
    </Dialog>
  );
}
