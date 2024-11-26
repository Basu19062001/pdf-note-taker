"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser, SignInButton, SignUpButton } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13 app directory

export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);
  const router = useRouter(); // useRouter for redirection
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the code is running client-side
  }, []);

  useEffect(() => {
    if (user && isClient) {
      CheckUser();
      router.push("/dashboard"); // Redirect to dashboard after successful login/signup
    }
  }, [user, isClient]);

  const CheckUser = async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress,
      imageUrl: user?.imageUrl,
      userName: user?.fullName,
    });

    console.log(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Quester
          </h1>
          <div className="flex space-x-4">
            {user ? (
              <UserButton />
            ) : (
              <>
                <SignInButton>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-text">
          AI PDF Notes Taker
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Turn your PDFs into meaningful notes with cutting-edge AI technology. Fast, secure, and easy to use.
        </p>
        <Button className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-lg transform hover:scale-105 transition-transform duration-200">
          Get Started
        </Button>
        <Image
          src="/hero-image-dark.png"
          alt="Hero Image"
          width={500}
          height={300}
          className="mt-10 rounded-xl shadow-lg"
        />
      </main>
    </div>
  );
}
