"use client";

import { useMemo } from "react";

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const { strength, feedback, strengthText } = useMemo(() => {
    if (!password) {
      return {
        strength: 0,
        feedback: "",
        strengthText: "",
      };
    }

    let score = 0;
    const feedbackMessages = [];

    // check length
    if (password.length >= 8) score += 1;
    else if (password.length >= 6) score += 0.5;
    else feedbackMessages.push("Make it longer (8+ chars)");

    // has #?
    if (/\d/.test(password)) score += 1;
    else feedbackMessages.push("Add a number");

    // has lowercase?
    if (/[a-z]/.test(password)) score += 0.5;

    // has uppercase?
    if (/[A-Z]/.test(password)) score += 0.5;
    else if (!/[A-Z]/.test(password) && password.length > 0) {
      feedbackMessages.push("Add uppercase letter");
    }

    // has special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    else if (password.length > 0) {
      feedbackMessages.push("Add special character");
    }

    // cap score at 4
    const finalScore = Math.min(score, 4);

    // check strength text
    let text = "";
    if (finalScore < 1.5) text = "Weak";
    else if (finalScore < 2.5) text = "Fair";
    else if (finalScore < 3.5) text = "Good";
    else text = "Strong";

    return {
      strength: finalScore,
      feedback: feedbackMessages.join(" • "),
      strengthText: text,
    };
  }, [password]);

  const getStrengthColor = () => {
    if (strength < 1.5) return "bg-red-500";
    if (strength < 2.5) return "bg-orange-500";
    if (strength < 3.5) return "bg-yellow-500";
    return "bg-green-500";
  };

  if (!password) return null;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${getStrengthColor()} transition-all duration-300`}
            style={{ width: `${(strength / 4) * 100}%` }}
          />
        </div>
        <span className="text-xs font-medium text-gray-600">
          {strengthText}
        </span>
      </div>
      {feedback && <p className="text-xs text-gray-500">{feedback}</p>}
    </div>
  );
}
