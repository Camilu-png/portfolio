import { cn } from "@/lib/utils";

export type AdaPose = "peek" | "yarn" | "ocarina" | "curious" | "sleepy";

const C = {
  black: "#2f2333",
  blackSoft: "#3d2e42",
  orange: "#d2854a",
  orangeSoft: "#e3a165",
  white: "#f2e6d6",
  shade: "#d9c8b6",
  
  nose: "#e6a0ac",
  line: "#20161f",
};

const EYE = "#93c47d";
const EYE_DARK = "#5d8c4c";

interface AdaProps {
  pose?: AdaPose;
  className?: string;
  label?: string;
}

/**
 * Ada — the calico cat mascot. Hand-drawn style inline SVG.
 * Calico patches (black + orange), white chest and paws, green eyes,
 * pink nose, large curious ears.
 */
export function Ada({ pose = "curious", className, label }: AdaProps) {
  const describedBy = label ? `ada-title-${pose}` : undefined;

  return (
    <svg
      viewBox="0 0 220 220"
      className={cn("h-40 w-40", className)}
      role={label ? "img" : "presentation"}
      aria-hidden={label ? undefined : true}
      aria-labelledby={describedBy}
    >
      {label ? <title id={describedBy}>{label}</title> : null}

      {/* tail */}
      <g className="ada-tail">
        <path
          d="M160 168c22 4 34-10 30-28-3-13-16-18-24-10-7 7-2 16 5 15 5-1 7-5 5-9"
          fill="none"
          stroke={C.orange}
          strokeWidth="13"
          strokeLinecap="round"
        />
        <path
          d="M176 142c6-4 13-2 16 5"
          fill="none"
          stroke={C.black}
          strokeWidth="11"
          strokeLinecap="round"
        />
      </g>

      {/* body */}
      <path
        d="M60 190c-6-40 6-72 50-72s56 32 50 72z"
        fill={C.white}
        stroke={C.line}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* body patches */}
      <path
        d="M148 132c10 10 14 33 12 58h-24c4-22 4-42 12-58z"
        fill={C.black}
        opacity="0.92"
      />
      <path d="M66 139c-4 13-6 32-5 51h18c-4-18-6-35-13-51z" fill={C.orange} opacity="0.9" />

      {/* front paws */}
      <ellipse cx="86" cy="186" rx="15" ry="9" fill={C.white} stroke={C.line} strokeWidth="3" />
      <ellipse cx="128" cy="186" rx="15" ry="9" fill={C.white} stroke={C.line} strokeWidth="3" />
      <path d="M81 183v6M86 182v7M91 183v6" stroke={C.shade} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M123 183v6M128 182v7M133 183v6"
        stroke={C.shade}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ears */}
      <path
        d="M60 88 58 40l38 22z"
        fill={C.orange}
        stroke={C.line}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M65 80 64 52l22 13z" fill={C.nose} opacity="0.75" />
      <path
        d="M160 88l2-48-38 22z"
        fill={C.black}
        stroke={C.line}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M155 80l1-28-22 13z" fill={C.nose} opacity="0.55" />

      {/* head */}
      <path
        d="M110 44c33 0 53 21 53 48s-24 44-53 44-53-17-53-44 20-48 53-48z"
        fill={C.white}
        stroke={C.line}
        strokeWidth="3.5"
      />
      {/* head patches */}
      <path
        d="M110 44c22 0 39 10 47 27-9 12-26 17-42 12-9-3-12-19-5-39z"
        fill={C.black}
        opacity="0.93"
      />
      <path
        d="M73 56c-9 8-15 21-16 36 10 4 21 1 26-8 5-10 1-21-10-28z"
        fill={C.orange}
        opacity="0.92"
      />
      <path d="M150 112c7-4 12-11 13-19-8-2-15 2-18 9-2 5 0 9 5 10z" fill={C.orange} opacity="0.8" />

      {/* eyes */}
      <g className="ada-eye">
        {pose === "sleepy" ? (
          <>
            <path
              d="M79 96c6 6 15 6 21 0"
              fill="none"
              stroke={C.line}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M120 96c6 6 15 6 21 0"
              fill="none"
              stroke={C.line}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <ellipse cx="89" cy="95" rx="11" ry="12" fill={EYE} stroke={C.line} strokeWidth="3" />
            <ellipse cx="131" cy="95" rx="11" ry="12" fill={EYE} stroke={C.line} strokeWidth="3" />
            <ellipse cx="89" cy="95" rx="4" ry="9" fill={EYE_DARK} />
            <ellipse cx="131" cy="95" rx="4" ry="9" fill={EYE_DARK} />
            <circle cx="92" cy="90" r="3" fill="#fdf6ea" />
            <circle cx="134" cy="90" r="3" fill="#fdf6ea" />
          </>
        )}
      </g>

      {/* nose + mouth */}
      <path
        d="M104 110h12l-6 7z"
        fill={C.nose}
        stroke={C.line}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M110 117v5M110 122c-3 5-10 5-13 1M110 122c3 5 10 5 13 1"
        fill="none"
        stroke={C.line}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* whiskers */}
      <g stroke={C.shade} strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <path d="M78 112 52 106M78 118 54 120M142 112l26-6M142 118l24 2" />
      </g>

      {/* collar */}
      <path
        d="M84 130c16 8 36 8 52 0"
        fill="none"
        stroke={C.nose}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="110" cy="137" r="6" fill={C.orangeSoft} stroke={C.line} strokeWidth="2" />

      {pose === "yarn" ? (
        <g>
          <circle cx="42" cy="180" r="20" fill="#c9a0d8" stroke={C.line} strokeWidth="3" />
          <path
            d="M27 172c12 4 24 12 30 20M30 189c8-11 20-18 31-20M42 161c-6 12-6 26 0 38"
            fill="none"
            stroke="#8e6aa3"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M62 176c14-4 22 2 24 10"
            fill="none"
            stroke="#c9a0d8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ) : null}

      {pose === "ocarina" ? (
        <g>
          <ellipse cx="110" cy="176" rx="34" ry="19" fill="#b9754a" stroke={C.line} strokeWidth="3" />
          <path d="M144 172c12-3 18 0 20 5" stroke={C.line} strokeWidth="3" fill="none" />
          <g fill={C.line} opacity="0.75">
            <circle cx="95" cy="171" r="3" />
            <circle cx="107" cy="169" r="3" />
            <circle cx="119" cy="171" r="3" />
            <circle cx="101" cy="182" r="3" />
            <circle cx="113" cy="182" r="3" />
            <circle cx="125" cy="179" r="3" />
          </g>
        </g>
      ) : null}

      {pose === "peek" ? (
        <g opacity="0.9">
          <circle cx="182" cy="62" r="4" fill="#f0c453" />
          <circle cx="194" cy="46" r="3" fill="#c9a0d8" />
          <circle cx="172" cy="42" r="2.5" fill="#f0c453" />
        </g>
      ) : null}
    </svg>
  );
}
