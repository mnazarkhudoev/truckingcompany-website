// React 19 hoists <title> and <meta> into <head>.
const PageMeta = ({ title, description }) => (
  <>
    <title>{title ? `${title} | Iron Bull Trucking` : "Iron Bull Trucking | Regional freight carrier in Lincoln, RI"}</title>
    {description && <meta name="description" content={description} />}
  </>
);

export default PageMeta;
