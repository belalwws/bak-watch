import React from "react";
import Layout from "./../Layout/Layout";
import Head from "../Components/Head";
const AboutUs = () => {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className=" xl:py-20 py-10 px-4">
          <div className=" grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                welcome to BAK WATCH
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p style={{ direction: "rtl" }}>
                  من أوليات هواة مشاهدة الأفلام والمسلسلات عبر المواقع المختلفة
                  هي الجودة وكذلك التنوع، ولذلك يحرص موقعنا على توفير باقة
                  ممتازة من الأفلام والمسلسلات القديمة والحصرية، وي سيما هو موقع
                  افلام ومسلسلات مجانا ويقدم مميزات وخصائص كثيرة من أهمها: واجهة
                  الموقع تعد واجهة موقعنا من أكثر واجهات مواقع الأفلام جاذبية
                  وبساطة، بمجرد الضغط على رابط الموقع تجد نفسك أمام عدد هائل من
                  الأفلام والمسلسلات، مما يجعل إختيار فيلم أو مسلسل لمشاهدته
                  امرا صعبا نوعا ما من شدة جاذبية أيقونات المشاهدة.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold mt-4">
                    50K
                  </span>
                  <h4 className="text-lg font-bold my-2">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Movie HD, Movie Box, Download Movies, Mobile Phone, Offline
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold mt-4">
                    22K
                  </span>
                  <h4 className="text-lg font-bold my-2">Lovely users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                    Movie HD, Movie Box, Download Movies, Mobile Phone, Offline
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-10 lg:mt-0">
              <img
                src="Images/about2.jpg"
                alt=""
                className="w-full xl:block hidden h-header rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
