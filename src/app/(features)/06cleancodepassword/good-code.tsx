"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function GoodCodeExamplePage() {
	return (
		<div className="p-8 space-y-4">
			<h1 className="font-semibold">
				Password Strength Checker - Good code type
      </h1>
      <PasswordChecker />
		</div>
	);
}

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const strength = evaluatePasswordStrength(password);
	return (
    <>
			<div className="space-y-4">
				<Input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="border-2"
        />
        <StrengthIndicator strength={strength} />
        <RequirementsList password={password} />
      </div>
		</>
	)
}


function StrengthIndicator({strength}: {strength: PasswordStrength}) {
  const colors = {
    weak: "text-red-500",
    medium: "text-yellow-500",
    strong: "text-green-500",
  };
  return (
    <div className="h-2 w-full space-y-2 pb-4 rounded bg-gray-200">
      <div className={`h-full rounded transition-all duration-300 ${colors[strength]}`}
      style={{width: getStrengthPercentage(strength)}}
      ></div>
      <p className="text-sm capitalize">{strength} password</p>
    </div>
  )
}

function RequirementsList({ password }: { password: string }) {
  const requirements = [
    {
      label: "At least 8 characters",
      met: hasMinimumLength(password),
    },
    {
      label: "Contains numbers",
      met: hasNumbers(password)
    },
    {
      label: 'Contains special characters',
      met: hasSpecialCharacters(password)
    },
    {
      label: 'Contains uppercase & lowercase letters',
      met: hasMixedCase(password)
    }
  ]

  return (
    <ul className="space-y-1 ">
      {requirements.map(({ label, met }) => (
        <RequirementItem key={label} label={label} met={met} />
      ))}
    </ul>
  )

}

function RequirementItem({ label, met }: { label: string; met: boolean }) {
  return (
    <li className={`flex items-center gap-2 text-sm ${met ? 'text-green-600' : 'text-gray-500'}`}>
      {met ? "✅" : 'o'} {label}
    </li>
  )
}

// Utility functions

function hasMinimumLength(password: string): boolean {
  return password.length >= 8;
}

function hasNumbers(password: string): boolean {
  return /\d/.test(password);
}

function hasSpecialCharacters(password: string): boolean {
  return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
}

function hasMixedCase(password: string): boolean {
  return /[a-z]/.test(password) && /[A-Z]/.test(password);
}

type PasswordStrength = "weak" | "medium" | "strong";

function evaluatePasswordStrength(password: string): PasswordStrength {
  const checks = [
    hasMinimumLength(password),
    hasNumbers(password),
    hasSpecialCharacters(password),
    hasMixedCase(password),
  ]

  const passedChecks = checks.filter(Boolean).length;

  if (passedChecks <= 1) return 'weak'
  if (passedChecks <= 2) return 'medium';
  return 'strong';
}

function getStrengthPercentage(strength: PasswordStrength): string {
  const percentages = {
    weak: '33%',
    medium: '66%',
    strong: '100%',
  }
  return percentages[strength];
}