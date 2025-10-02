import defaultFavicon from "@/assets/img/logo/ca-logo3.1.png";
const PageMeta = ({
  title,
  description,
  icon
}) => {
  return <>
      <title>{title ?? "Iron Bull Trucking"}</title>
      {description && <meta property="og:description" content={description} />}
      <link rel="icon" href={icon ?? defaultFavicon} type="image/png" />
    </>;
};
export default PageMeta;