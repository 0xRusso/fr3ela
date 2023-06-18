"use client";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Input from "@/components/Input";
import { useMultistepForm } from "@/context/Form";
import Link from "next/link";

function PersonalInfoForm() {
  const { next, prev, step } = useMultistepForm<{ name: string }>();

  return (
    <Card className="w-full max-w-xl mx-auto">
      <form className="flex flex-col gap-6 justify-center items-center">
        <div className="w-40 h-40 rounded-full border-2 border-dashed flex items-center justify-center">
          <label
            htmlFor="file"
            className="cursor-pointer text-center p-4 md:p-8"
          >
            <svg
              className="w-10 h-10 mx-auto"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667"
                stroke="#4F46E5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="mt-3 text-gray-700 max-w-xs mx-auto text-xs">
              Click to{" "}
              <span className="font-medium text-blue-600">
                Upload your file
              </span>{" "}
              or drag your file here
            </p>
          </label>
          <Input id="file" type="file" className="hidden" />
        </div>

        <div className="flex flex-row gap-3 w-full items-end">
          <div>
            <Input
              label="Full name"
              type="text"
              placeholder="First name"
              required
            />
          </div>
          <div>
            <Input type="text" required placeholder="Last name" />
          </div>
        </div>

        <div className="flex justify-between w-full">
          {step !== 0 ? (
            <Button
              onClick={() => prev()}
              variant="hover-outline"
              className="inline-block shrink-0 rounded-md text-sm font-medium text-white transitiom"
            >
              Go Back
            </Button>
          ) : null}
          <Button
            onClick={() => next({ name: "John Doe" })}
            variant="hover-outline"
            className="inline-block shrink-0 rounded-md text-sm font-medium text-white transitiom"
          >
            Next
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default PersonalInfoForm;
