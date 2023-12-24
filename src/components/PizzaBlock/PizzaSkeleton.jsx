import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#e8e8e8"
    foregroundColor="#c9c9c9"
  >
    <rect x="33" y="290" rx="8" ry="8" width="225" height="16" />
    <rect x="138" y="410" rx="0" ry="0" width="1" height="0" />
    <rect x="7" y="430" rx="11" ry="11" width="98" height="28" />
    <rect x="7" y="325" rx="20" ry="20" width="275" height="81" />
    <rect x="123" y="423" rx="20" ry="20" width="161" height="43" />
    <circle cx="140" cy="146" r="125" />
  </ContentLoader>
);
export default PizzaSkeleton;
