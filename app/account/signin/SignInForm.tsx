"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Eye, EyeClosed } from "lucide-react";

import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formData = new FormData();

  const resetFormData = () => {
    formData.delete("username");
    formData.delete("password");
    setUsername("");
    setPassword("");
  };

  const validateForm = () => {
    if (!username.trim()) {
      setError("Please enter your username or email.");
      return false;
    }
    if (!password.trim()) {
      setError("Please enter your password.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmitSignIn = () => {
    if (!validateForm()) {
      return;
    }
    formData.append("username", username);
    formData.append("password", password);

    alert(`${formData.get("username")} ${formData.get("password")}`);
    // Handle form submission logic here, such as sending the formData to an API endpoint.

    resetFormData();
  };

  return (
    <div className="flex flex-col gap-4">
      <FieldSet>
        <FieldDescription>
          <span className="text-primary-dark">*</span> indicates required field
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Username </FieldLabel>

            <Input
              id="name"
              autoComplete="off"
              placeholder="Username or email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && <FieldError>Error:Enter an email/username.</FieldError>}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <InputGroup>
              <InputGroupInput
                id="password"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  size="icon-xs"
                  onClick={() => {
                    setIsVisible((prev) => !prev);
                  }}
                >
                  {isVisible ? <Eye /> : <EyeClosed />}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            {error && <FieldError>Error:Enter an email/username.</FieldError>}
          </Field>
        </FieldGroup>
      </FieldSet>

      <div className="flex items-center gap-2 mt-4 mb-6 text-sm text-neutral-800">
        <Checkbox id="remember-me" className="mr-1" />
        <label
          htmlFor="remember-me"
          className="flex flex-wrap items-center gap-1"
        >
          <span>Keep me signed in.</span>
          <span>
            <Tooltip>
              <TooltipTrigger>
                <p className="text-green-800 font-semibold underline hover:no-underline">
                  Details
                </p>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs text-xs leading-snug">
                <p>
                  Checking this box will reduce the number of times you’re asked
                  to sign in. To keep your account secure, use this option only
                  on your personal devices.
                </p>
              </TooltipContent>
            </Tooltip>
          </span>
        </label>
      </div>

      <div className="flex flex-col items-start space-y-1 mb-6 text-sm">
        <Tooltip>
          <TooltipTrigger>
            <p className="text-green-800 text-left inline-block font-semibold underline hover:no-underline">
              Forgot your username?
            </p>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-xs leading-snug">
            <p>You can now use your email instead of a username.</p>
          </TooltipContent>
        </Tooltip>
        <Link
          className="text-green-800 font-semibold underline hover:no-underline"
          href="#"
        >
          Forgot your password?
        </Link>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={() => handleSubmitSignIn()}
          className="rounded-full px-8 py-4 font-semibold bg-green-800 hover:bg-green-900 text-white shadow-md"
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}
