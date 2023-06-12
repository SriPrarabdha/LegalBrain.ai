const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        {/* <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-300 dark:from-indigo-800 dark:via-fuchsia-400 dark:to-rose-400 sm:text-4xl md:text-[45px] ">
          {title}
        </h2> */}
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
