import React from "react";
import DetailFeature from "@/features/Detail";

const DetailPage: React.FC<{ params: { id: string } }> = ({ params }) => {
    return <DetailFeature params={params}/>;
};

export default DetailPage;