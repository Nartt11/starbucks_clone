"use client";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import LoadingButton from "@/components/ui/loading-button";
import { useAuth } from "@/hooks/useAuth";
import { registerSchema } from "@/lib/schemas/auth-schema";
import { RegisterData } from "@/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CreateForm() {
  const { registerAsync, isRegisterLoading } = useAuth();
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const handleSubmitRegister = async (data: RegisterData) => {
    try {
      await registerAsync(data);
    } catch (error: any) {
      console.log("ERROR HERE:", error);
      setError("root", {
        type: "server",
        message: error.message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitRegister)}
      className="space-y-8 text-xl text-neutral-900"
    >
      <FieldSet>
        <FieldDescription>
          <p className="font-semibold text-sm">* indicates required field</p>
          {errors.root && (
            <div className="text-red-500 text-sm font-medium border-red-500 border rounded-md p-2 mt-2">
              {errors.root.message}
            </div>
          )}
        </FieldDescription>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              autoComplete="off"
              placeholder="Your username"
              // onError={errors.username}
              {...register("username")}
            />
            {errors.username && (
              <FieldError>{errors.username.message}</FieldError>
            )}
          </Field>
        </FieldGroup>

        <FieldDescription>
          <p className="font-semibold text-sm">Account Security</p>
        </FieldDescription>
        <Field>
          <FieldLabel htmlFor="email">Email address</FieldLabel>
          <Input
            id="email"
            type="email"
            autoComplete="off"
            placeholder="Your email address"
            {...register("email")}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
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

          <p className="mt-2 text-[11px] text-neutral-700">
            Create a password 8 to 25 characters long that includes at least 1
            uppercase and 1 lowercase letter, 1 number and 1 special character
            like an exclamation point or asterisk.
          </p>
        </Field>
      </FieldSet>

      <p className="text-[11px] text-green-800 font-semibold underline cursor-pointer">
        Already have a Starbucks gift card?
      </p>

      {/* Collect more stars */}
      <section className="space-y-3">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-neutral-700 uppercase">
          Collect more stars & earn rewards
        </p>
        <p className="text-[11px] text-neutral-700">
          Email is a great way to know about offers and what&apos;s new from
          Starbucks.
        </p>
        <label className="flex items-start gap-2 text-[11px] text-neutral-800">
          <Checkbox id="email-opt-in" className="mt-0.5" />
          <span>Yes, I&apos;d like email from Starbucks</span>
        </label>
        <p className="text-[11px] text-neutral-600">
          Know about initiatives, announcements and product offers.
        </p>
      </section>

      {/* Terms of use */}
      <section className="space-y-3">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-neutral-700 uppercase">
          Terms of use
        </p>
        <label className="flex items-start gap-2 text-[11px] text-neutral-800">
          <Checkbox id="terms" className="mt-0.5" />
          <span>
            * I agree to the{" "}
            <span className="text-green-800 underline">
              Starbucks Rewards Terms
            </span>{" "}
            and the{" "}
            <span className="text-green-800 underline">
              Starbucks Card Terms
            </span>{" "}
            and have read the
            <span className="text-green-800 underline">
              {" "}
              Starbucks Privacy Statement
            </span>
            .
          </span>
        </label>
      </section>

      <div className="flex justify-end mt6">
        <button
          type="submit"
          disabled={isRegisterLoading}
          className="bg-primary-dark flex items-center text-white py-4 px-6 rounded-full font-normal shadow-2xs"
        >
          {isRegisterLoading ? (
            <span>
              <LoaderCircle size={24} className="animate-spin mr-3" />
            </span>
          ) : (
            ""
          )}
          Create account
        </button>
      </div>
    </form>
  );
}
