"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AddModalContainer from "./add-modal-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import Loader from "@/components/common/loader";
import { useCompanyService } from "@/hooks/use-company-service";
import { handleApiError } from "@/lib/errors";

const companySchema = z.object({
  name: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone number is required"),
  address: z.string().min(3, "Address is required"),
  employeeCount: z
    .number()
    .int("Employee count must be a whole number")
    .min(1, "Employee count must be greater than 0"),
});

type CompanyFormValues = z.infer<typeof companySchema>;

interface AddCompanyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddCompanyModal({
  open,
  onOpenChange,
}: AddCompanyModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createCompany } = useCompanyService();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CompanyFormValues>({
    resolver: zodResolver(companySchema),
  });

  const onSubmit = async (data: CompanyFormValues) => {
    try {
      setIsSubmitting(true);

      const payload = {
        ...data,
        employeeCount: Number(data.employeeCount),
      };

      console.log("PAYLOAD SENT:", payload);

      await createCompany(payload);

      toast.success("Company Added Successfully", {
        description: `${data.name} has been onboarded.`,
      });

      reset();
      onOpenChange(false);
    } catch (error) {
      const apiError = handleApiError(error);

      toast.error("Company creation failed", {
        description: apiError.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AddModalContainer
      open={open}
      onOpenChange={onOpenChange}
      title="Onboard New Company"
      description="Create a new company account"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Company Name */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Company Name
          </Label>
          <Input
            placeholder="E.g. Acme Corp"
            className="rounded-xl py-5"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Email
          </Label>
          <Input
            placeholder="hr@company.com"
            className="rounded-xl py-5"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Phone Number
          </Label>
          <Input
            placeholder="0201234567"
            className="rounded-xl py-5"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Address
          </Label>
          <Input
            placeholder="123 Main St, Accra"
            className="rounded-xl py-5"
            {...register("address")}
          />
          {errors.address && (
            <p className="text-xs text-red-500">{errors.address.message}</p>
          )}
        </div>

        {/* Employee Count */}
        <div className="space-y-2">
          <Label className="text-xs font-medium text-neutral-black">
            Employee Count
          </Label>
          <Input
            type="number"
            placeholder="50"
            className="rounded-xl py-5"
            {...register("employeeCount", { valueAsNumber: true })}
          />
          {errors.employeeCount && (
            <p className="text-xs text-red-500">
              {errors.employeeCount.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-6">
          <Button
            type="button"
            variant="secondary"
            className="px-8 py-2 border-[0.65px] bg-[#F8FAFD] text-gray-100 rounded-xl cursor-pointer text-sm w-fit font-medium"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>

          <Button
            type="submit"
            className="px-5 py-2 flex w-fit rounded-xl text-sm font-medium bg-primary-100 cursor-pointer text-white"
          >
            {isSubmitting ? (
              <>
                <Loader size="sm" />
                Adding...
              </>
            ) : (
              "Add Company"
            )}
          </Button>
        </div>
      </form>
    </AddModalContainer>
  );
}
