"use client";

// import PersonalInfoForm from "@/components/cred-application/add-personal-info";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth");
  }, []);

  return <div>loading</div>;
}
