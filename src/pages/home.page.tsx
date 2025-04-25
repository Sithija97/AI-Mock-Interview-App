import { Button } from "@/atoms";
import { Container } from "@/organisms";

export const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-12">
          {/* <h2 className="text-3xl text-center md:text-6xl">
            <span className="font-extrabold md:text-8xl">
              Your AI Interview Coach
            </span>
            <br />
            improve your interview chances and skills
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out.
          </p> */}
          <section className="text-center px-4 pt-16 pb-10 bg-white">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-gray-900">
              Your AI Interview Coach
            </h1>
            <div className="inline-block bg-gray-300 mt-4 px-4 py-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                Intervue.AI
              </h2>
            </div>
            <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-xl mx-auto">
              Get your dream job with the help of your AI interview coach.
              Practice full length mock interviews, ideate answers, and get
              feedback.
            </p>
            <Button className="mt-8 px-6 py-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded shadow">
              Start for Free
            </Button>
          </section>
        </div>

        {/* <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
          <p className="text-3xl font-semibold text-gray-900 text-center">
            250k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Recieved
            </span>
          </p>
          <p className="text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div> */}

        {/* image section */}
        <div className="w-full rounded-xl relative">
          <img
            src="https://interviewly.ai/_next/static/media/hero-video-interview.36f3b04b.svg"
            alt=""
            className="w-3xl h-full object-cover m-auto"
          />

          {/* <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Inteviews Copilot&copy;
          </div> */}

          {/* <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              distinctio natus, quos voluptatibus magni sapiente.
            </p>

            <Button className="mt-3">
              Generate <Sparkles />
            </Button>
          </div> */}
        </div>
      </Container>
    </div>
  );
};
