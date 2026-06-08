interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center, light }: Props) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {label && (
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-2 ${
            light ? "text-gov-gold" : "text-gov-accent"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold heading-accent ${
          center ? "heading-accent-center" : ""
        } ${light ? "text-white" : "text-gov-primary"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
