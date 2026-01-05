"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Yogesh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
