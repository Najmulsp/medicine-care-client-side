import { GiMedicalDrip } from "react-icons/gi";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { TbMedicalCross } from "react-icons/tb";


const WeProvides = () => {
    return (
        <div>
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
        </div>
    );
};

export default WeProvides;