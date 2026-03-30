"use client";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
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
import { loginSchema } from "@/lib/schemas/auth-schema";
import { LoginData } from "@/types/auth.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";

export default function SignInForm() {
  const { login, isLoading } = useAuth();

  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitSignIn = async (data: LoginData) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitSignIn)}
      className="flex flex-col gap-4"
    >
      <FieldSet>
        <FieldDescription>
          <span className="text-primary-dark">*</span> indicates required field
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="usernameOrEmail">
              Email or Username{" "}
            </FieldLabel>

            <Input
              id="usernameOrEmail"
              autoComplete="off"
              placeholder="Username or email address"
              {...register("emailOrUsername")}
            />
            {errors.emailOrUsername && (
              <FieldError> {errors.emailOrUsername.message} </FieldError>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <InputGroup>
              <InputGroupInput
                id="password"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
                {...register("password")}
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
            {errors.password && (
              <FieldError> {errors.password.message} </FieldError>
            )}
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
              Forgot your Username?
            </p>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-xs leading-snug">
            <p>You can now use your email instead of a Username.</p>
          </TooltipContent>
        </Tooltip>
        <Link
          className="text-green-800 font-semibold underline hover:no-underline"
          href="/account/forgot-password"
        >
          Forgot your password?
        </Link>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          className="rounded-full px-8 py-4 font-semibold bg-green-800 hover:bg-green-900 text-white shadow-md"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
}
