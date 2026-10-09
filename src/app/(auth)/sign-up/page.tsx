'use client'
import { authClient } from "@/lib/auth-client";
import {
    Button,

    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,

    Separator,

    TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";


function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.5 5.5 0 0 1-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.86-3a7.16 7.16 0 0 1-10.67-3.76H1.4v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.33a7.2 7.2 0 0 1 0-4.66v-3.1H1.4a12 12 0 0 0 0 10.86l4-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.6 4.58 1.8l3.43-3.43A11.95 11.95 0 0 0 12 0 12 12 0 0 0 1.4 6.57l4 3.1A7.16 7.16 0 0 1 12 4.75z"
      />
    </svg>
  );
}
 
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"
      />
    </svg>
  );
}

const fieldInput =
    "rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm shadow-none placeholder:text-gray-500";
const fieldLabel = "mb-1 text-sm font-medium text-gray-900";
const SignUpPage = () => {
    const [password, setPassword] = useState("");



    const onSubmit =  async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...users } = Object.fromEntries(formData.entries()) as {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
  };

   const { data, error } = await authClient.signUp.email(users);
    if (data) {
                console.log(data);
                redirect('/')
    
            }
            if (error) {
                console.log(error);
    
            }
    
    
  };

  const handleGoogleSignUp = async() => {
     const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
  
  }
  const handleGithubSignUp = async() => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
    console.log(data);
    
  }

    return (
        <div className='min-h-[77vh] max-w-2xl mx-auto '>
            <div className='text-center pt-4'>
                <h2 className='text-[#1D271F] text-2xl font-bold'>অ্যাকাউন্ট তৈরি করুন</h2>
                <p className='text-[#1D271F]/70 text-sm py-1'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </div>
            <div className="bg-white max-w-103.5 mx-auto py-5 px-8 border border-gray-200 rounded-xl">
                <Form className="flex flex-col gap-4" onSubmit={onSubmit} >
                    <Fieldset>

                        <FieldGroup>
                            <TextField
                                isRequired

                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }
                                    return null;
                                }}
                            >
                                <Label>নাম</Label>
                                <Input className='border rounded-lg border-gray-200/70 py-2' placeholder="যেমন: রহিম উদ্দিন" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label>Email</Label>
                                <Input className='border rounded-lg border-gray-200/70 py-2' placeholder="john@example.com" />
                                <FieldError />
                            </TextField>
                            <TextField
                                name="password"
                                type="password"
                                isRequired
                                fullWidth
                                minLength={8}
                                value={password}
                                onChange={setPassword}
                            >
                                <Label className={fieldLabel}>পাসওয়ার্ড</Label>
                                <Input className={fieldInput} placeholder="কমপক্ষে ৮ অক্ষর" />
                                <FieldError />
                            </TextField>

                            <TextField
                                name="confirmPassword"
                                type="password"
                                isRequired
                                fullWidth
                                validate={(value) =>
                                    value === password ? null : "পাসওয়ার্ড মিলছে না"
                                }
                            >
                                <Label className={fieldLabel}>পাসওয়ার্ড নিশ্চিত করুন</Label>
                                <Input className={fieldInput} placeholder="আবার লিখুন" />
                                <FieldError />
                            </TextField>
                        </FieldGroup>
                        <Button
                            type="submit"

                            className="mt-1 h-11 w-full rounded-xl bg-[#0a8a43] text-sm font-semibold text-white shadow-md hover:bg-[#087a3b]"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </Button>
                    </Fieldset>
                     <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-gray-500">অথবা</span>
            <Separator className="flex-1" />
          </div>
 
          <div className="flex gap-2 max-w-90  justify-center items-center ">
            <div>
                <Button
              type="button"
              onPress={handleGoogleSignUp}
              variant="outline"
              className="h-10 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900"
            >
              <GoogleIcon />
              Google দিয়ে চালিয়ে যান
            </Button>
            </div>
            <div>
                <Button
              type="button"
              onPress={handleGithubSignUp}
              variant="outline"
              className="h-10 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900"
            >
              <GitHubIcon />
              GitHub দিয়ে চালিয়ে যান
            </Button>
            </div>
          </div>
 
          <p className="text-center text-sm text-gray-800">
            অ্যাকাউন্ট আছে?{" "}
            <Link href="/sign-in" className="font-medium text-[#0a8a43] hover:underline">
              সাইন ইন করুন
            </Link>
          </p>
           <Link href="/" className="mt-6 text-sm text-center text-gray-500 hover:text-gray-700">
        ← হোম পেজে ফিরে যান
      </Link>
                </Form>
                
            </div>
            
        </div>
    );
};

export default SignUpPage;