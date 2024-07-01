

const Faq = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container">
          

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
