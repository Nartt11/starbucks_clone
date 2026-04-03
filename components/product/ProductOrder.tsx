import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types/product.type";
import Image from "next/image";
import cup from "@/public/coffee-cup.svg";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProductOrderProps {
  mockProduct: Product;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  SetIsCustomizeOpen: (isOpen: boolean) => void;
  handleChangeOption?: (key: string, value: string) => void;
}
export default function ProductOrder({
  mockProduct,
  selectedSize,
  setSelectedSize,
  SetIsCustomizeOpen,
  handleChangeOption,
}: ProductOrderProps) {
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};

    mockProduct.customizeOptions.forEach((opt) => {
      if (opt.type === "input") {
        initial[opt.key] = opt.defaultValue || 0;
      }
    });

    return initial;
  });

  const handleIncrease = (key: string) => {
    const current = counts[key] || 0;
    const newValue = current + 1;

    setCounts((prev) => ({
      ...prev,
      [key]: newValue,
    }));

    handleChangeOption?.(key, String(newValue));
  };
  const handleDecrease = (key: string) => {
    const current = counts[key] || 0;
    const newValue = Math.max(0, current - 1);

    setCounts((prev) => ({
      ...prev,
      [key]: newValue,
    }));

    handleChangeOption?.(key, String(newValue));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left: Size options */}
      <section>
        <div className="relative px-2 pb-3">
          <h2 className="text-[19px] font-semibold text-[#000000de]">
            Size options
          </h2>
          <span className="h-1 w-full bg-[#d4e9e2] mb-6 rounded-3xl left-0 absolute " />
        </div>

        <div className="flex gap-6 mb-10">
          {mockProduct.sizeOptions.map((size) => (
            <button
              key={size.key}
              type="button"
              className={`flex flex-col items-center gap-2 text-sm  ${
                size.key === selectedSize
                  ? "text-green-900 font-semibold"
                  : "text-neutral-700"
              }`}
              onClick={() => setSelectedSize(size.key)}
            >
              <Image
                src={cup}
                alt={size.name}
                width={10}
                height={10}
                className={` h-10 w-10 rounded-full  p-2 ${selectedSize === size.key ? "border-2 border-green-900 bg-primary-light" : "border-transparent"}`}
              />
              <span>{size.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Right: What's included */}
      <section className="flex flex-col justify-between gap-3">
        <div className="w-full">
          <div className="relative px-2 pb-3">
            <h2 className="text-[19px] font-semibold text-[#000000de]">
              What&apos;s included
            </h2>
            <span className="h-1 w-full bg-[#d4e9e2] mb-6 rounded-3xl left-0 absolute " />
          </div>

          <div className="space-y-3">
            {mockProduct.customizeOptions.map((group) =>
              group.type === "select" ? (
                <Field
                  key={group.key}
                  className="w-full min-w-48 bg-white px-4 py-1 flex items-center justify-between text-sm "
                >
                  <FieldLabel className="flex-1 ">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                      {group.name}
                    </p>
                  </FieldLabel>

                  <FieldContent>
                    <Select
                      defaultValue={group.options?.[0].name}
                      onValueChange={(value) =>
                        handleChangeOption?.(group.key, value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {group.options?.map((option) => (
                          <SelectItem key={option.key} value={option.name}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FieldContent>
                </Field>
              ) : (
                // For input type, you can replace this with an actual input field. For now, it's just a placeholder.

                <div key={group.key} className="w-[360px] space-y-1.5">
                  {/* Label */}
                  <label className="text-sm text-muted-foreground">
                    {group.name}
                  </label>

                  {/* Input Box */}
                  <div
                    className={cn(
                      "flex items-center justify-between",
                      "rounded-xl border bg-background px-4 py-3",
                      "transition-colors focus-within:ring-2 focus-within:ring-ring",
                    )}
                  >
                    {/* Left text */}
                    <span className="text-sm">{group.name}</span>

                    {/* Counter */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full  text-[#00754a] border-[#00754a]"
                        onClick={() => handleDecrease(group.key)}
                      >
                        −
                      </Button>

                      <span className="w-5 text-center text-sm ">
                        {counts[group.key] || 0}
                      </span>

                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-full text-[#00754a] border-[#00754a]"
                        onClick={() => handleIncrease(group.key)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          <Button
            className="w-fix mt-6 rounded-full px-6 py-2"
            onClick={() => SetIsCustomizeOpen(true)}
          >
            Customize
          </Button>
        </div>
      </section>
    </div>
  );
}
