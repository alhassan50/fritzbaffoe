import React from "react";

export default function Section({
  children,
  sectionClassName,
  className,
  id,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  sectionClassName?: string;
  id?: string;
}>) {
  return (
    <section id={id} className={`${sectionClassName}`}>
      <div className={`px-[3%] py-24 grid gap-6 ${className}`}>{children}</div>
    </section>
  );
}
