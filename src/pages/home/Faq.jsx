import { FaTruckMedical } from "react-icons/fa6";
import { GiMedicalDrip } from "react-icons/gi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { TbMedicalCross } from "react-icons/tb";

const Faq = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container">
          <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                <p className="font-serif text-sm dark:text-gray-600">
                  Qualisque erroribus usu at, duo te agam soluta mucius.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article className="flex flex-col dark:bg-gray-50">
                <div className="p-6  rounded shadow-md dark:bg-gray-50">
                  <div className="flex flex-col items-center justify-center p-4">
                    <LiaFileMedicalAltSolid className="text-5xl text-sky-400" />
                    <h3 className="my-3 ml-3 text-3xl font-semibold">
                      Medical professionals
                    </h3>
                    <div className="space-y-1 leading-tight">
                      <p>Similique quas ea veniam</p>
                      <p>Tempore quasi porro</p>
                      <p>Blanditiis aut mollitia ex</p>
                    </div>
                  </div>
                  </div>
                </article>
                <article className="flex flex-col dark:bg-gray-50">
                  <div className="p-6  rounded shadow-md dark:bg-gray-50">
                    <div className="flex flex-col items-center p-4">
                      <TbMedicalCross className="text-5xl text-sky-400" />
                      <h3 className="my-3 ml-3 text-3xl font-semibold">
                        Emergency Help
                      </h3>
                      <div className="space-y-1 leading-tight">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="flex flex-col dark:bg-gray-50">
                  <div className="p-6 col-span-1 rounded shadow-md dark:bg-gray-50">
                    <div className="flex flex-col items-center p-4">
                      <LiaFileMedicalAltSolid className="text-5xl text-sky-400" />
                      <h3 className="my-3 ml-3 text-3xl font-semibold">
                        Medical professionals
                      </h3>
                      <div className="space-y-1 leading-tight">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="flex flex-col dark:bg-gray-50">
                  <div className="p-6 col-span-1 rounded shadow-md dark:bg-gray-50">
                    <div className="flex flex-col items-center p-4">
                      <GiMedicalDrip className="text-5xl text-sky-400" />
                      <h3 className="my-3 ml-3 text-3xl font-semibold">
                        Qualified Doctors
                      </h3>
                      <div className="space-y-1 leading-tight">
                        <p>Similique quas ea veniam</p>
                        <p>Tempore quasi porro</p>
                        <p>Blanditiis aut mollitia ex</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* faq */}
          <section className="dark:bg-gray-100 border w-full xl:col-span-3 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
              <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                FAQ
              </p>
              <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                Have some Questions?
              </h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                <details open="">
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What are your regular office hour?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde neque in fugiat magni, quas animi enim veritatis
                      deleniti ex. Impedit.
                    </p>
                  </div>
                </details>
                <details open="">
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What is your appointment policy?
                  </summary>
                  <div className="px-4 pb-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est aspernatur quae, eos explicabo odit minima libero
                      veniam similique quibusdam doloribus facilis ipsa
                      accusantium vel maiores corrupti! Libero voluptate a
                      doloribus?
                    </p>
                  </div>
                </details>
                <details>
                  <summary className="py-2 outline-none cursor-pointer focus:underline">
                    What should I do if I am ill?
                  </summary>
                  <div className="px-4 pb-4 space-y-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut voluptates aspernatur dolores in consequatur doloremque
                      inventore reprehenderit, consequuntur perspiciatis
                      architecto.
                    </p>
                    <p>
                      Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                      veritatis velit quasi cupiditate unde eaque! Iure,
                      voluptatibus autem eaque unde possimus quae.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Faq;
