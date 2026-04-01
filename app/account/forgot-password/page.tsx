import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function page() {
  return (
    <div className="max-w-md mx-auto px-4 py-14 ">
      <p className="text-3xl font-semibold tracking-tight text-neutral-900 mb-8 text-center">
        Forgot your password?
      </p>

      <div className="flex flex-col bg-white inset-shadow-xs rounded-2xl px-10 py-9 w-full border border-neutral-200">
        <form>
          <FieldSet>
            <FieldDescription>
              <span className="text-primary-dark">*</span> indicates required
              field
            </FieldDescription>

            <Field>
              <FieldLabel htmlFor="email">Email address</FieldLabel>
              <Input id="email" placeholder="Email" />
            </Field>
          </FieldSet>

          <div className="flex justify-end mt-5">
            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white rounded-full py-4 px-8"
            >
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
