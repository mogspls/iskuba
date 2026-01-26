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

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

const COURSE_GROUPS: Array<{ label: string; items: string[] }> = [
  {
    label: "Experience Programs",
    items: [
      "Bubblemaker",
      "Discover Scuba Driving",
      "Discover Snorkeling",
      "Advanced Snorkeling",
    ],
  },
  {
    label: "Certification Courses",
    items: [
      "Scuba Diver",
      "Open Water Diver",
      "Advanced Open Water Diver",
      "Rescue Diver",
      "Emergency First Response",
    ],
  },
];

const ALL_COURSES = COURSE_GROUPS.flatMap((g) => g.items);

// Put these somewhere central if you prefer:
const CONTACT_PHONE_LOCAL = "09171240520";
const CONTACT_PHONE_INTL = "639171240520"; // wa.me expects intl format without "+"
const CONTACT_TELEGRAM_USERNAME = "ivanarcosis";
const CONTACT_PHONE_PLUS = "+639178214826";    // Viber-style display
const CONTACT_PHONE_PLUS_ENC = "%2B639178214826";
const TELEGRAM_USERNAME = "ivanarcosis";

function encode(v: string) {
  return encodeURIComponent(v);
}

function buildMessage(args: {
  course: string;
  name: string;
  email: string;
  body: string;
  pageUrl: string;
}) {
  const lines = [
    `Course: ${args.course}`,
    `Name: ${args.name || "-"}`,
    `Email: ${args.email || "-"}`,
    "",
    args.body || "",
    args.pageUrl ? `\nPage: ${args.pageUrl}` : "",
  ];
  return lines.join("\n").trim();
}

function buildHref(method: ContactMethod, message: string, pageUrl: string) {
  switch (method) {
    case "whatsapp":
      // https://wa.me/<number>?text=<urlencoded>
      return `https://wa.me/${CONTACT_PHONE_INTL}?text=${encode(message)}`;

    case "telegram":
      // Official deep link supports draft text:
      // t.me/<username>?text=<draft_text>
      // Add &profile only if you want to open the profile instead of the chat. :contentReference[oaicite:3]{index=3}
      return `https://t.me/${TELEGRAM_USERNAME}?text=${encode(message)}`;

    case "sms":
      // RFC 5724 format: sms:+<number>?body=<percent-encoded UTF-8> :contentReference[oaicite:4]{index=4}
      // Note: some iOS behavior may ignore body per Apple's docs. :contentReference[oaicite:5]{index=5}
      return `sms:${CONTACT_PHONE_PLUS}?body=${encode(message)}`;

    case "email":
      return `mailto:?subject=${encode("Scuba Inquiry")}&body=${encode(message)}`;
  }
}

function methodLabel(method: ContactMethod) {
  switch (method) {
    case "sms":
      return "sms";
    case "telegram":
      return "Telegram";
    case "whatsapp":
      return "WhatsApp";
    case "email":
      return "Email";
  }
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
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
    [open, selectedCourse]
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
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}

function ContactModalDialog() {
  const { open, close, selectedCourse, setSelectedCourse } = useContactModal();

  const [course, setCourse] = useState<string>(selectedCourse ?? ALL_COURSES[0]);
  const [contactMethod, setContactMethod] = useState<ContactMethod | "">("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [body, setBody] = useState<string>("");

  // Sync local "course" whenever modal opens for a specific course
  React.useEffect(() => {
    if (open) {
      const next = selectedCourse && ALL_COURSES.includes(selectedCourse)
        ? selectedCourse
        : ALL_COURSES[0];

      setCourse(next);
      setSelectedCourse(next);

      // Optional: auto-seed body each open if empty
      setBody((prev) => prev || `Hi! I'd like to inquire about ${next}.`);
      setContactMethod("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, selectedCourse]);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const message = buildMessage({
    course,
    name,
    email,
    body,
    pageUrl,
  });

  const href =
    contactMethod !== "" ? buildHref(contactMethod, message, pageUrl) : "";

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
                    <SelectLabel className="font-bold">
                      ---- {group.label} ----
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
              onValueChange={(v: string) => setContactMethod(v as ContactMethod)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a channel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sms">SMS</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectContent>
            </Select>

            {/* tiny helper text */}
            <p className="text-xs text-muted-foreground">
              Viber uses a forward/share deep link; WhatsApp uses wa.me; Telegram uses share links.
            </p>
          </div>

          {/* Name + Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                type="email"
              />
            </div>
          </div>

          {/* Body */}
          <div className="grid gap-2">
            <Label>Body</Label>
            <Textarea
              value={body}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)}
              rows={6}
              placeholder={`Type your message...`}
            />
          </div>

          {/* Send */}
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={close} type="button">
              Cancel
            </Button>

            <Button
              asChild
              disabled={contactMethod === ""}
              type="button"
              onClick={() => {
                // optional: close right after user clicks send
                // close();
              }}
            >
              <a
                href={href}
                target={contactMethod === "email" ? undefined : "_blank"}
                rel="noreferrer"
              >
                {contactMethod === ""
                  ? "Send"
                  : `Send via ${methodLabel(contactMethod)}`}
              </a>
            </Button>
          </div>

          {/* Optional: show what will be sent */}
          {/* <div className="rounded-md border p-3 text-xs whitespace-pre-wrap bg-muted/30">
            <div className="font-semibold mb-1">Preview</div>
            {message || "(empty)"}
          </div> */}
        </div>

        {/* Optional: display phone for clarity */}
        <div className="text-xs text-muted-foreground mt-2">
          Viber/WhatsApp number: {CONTACT_PHONE_LOCAL} · Telegram: @{CONTACT_TELEGRAM_USERNAME}
        </div>
      </DialogContent>
    </Dialog>
  );
}
