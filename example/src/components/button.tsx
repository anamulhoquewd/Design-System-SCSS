import { Button } from "@ds.e/react";
import { IconArrowLeft, IconArrowRight, IconArrowUp } from ".././assets/icons";

function ButtonExample() {
  return (
    <>
      <h3 className="h3 semibold text-gray-900">Buttons</h3>

      <div className="mt-14">
        {/* <ul className="flex gap-16 justify-end mb-4"> */}
        <ul className="grid-col-5 mb-10 justify-items-center justify-self-end w-11_12">
          <li className="">Giant</li>
          <li className="">Large</li>
          <li className="">Medium</li>
          <li className="">Small</li>
          <li className="">Tiny</li>
        </ul>

        <div className="flex gap-10 justify-between">
          <div className="flex flex-col gap-23 mt-10">
            {[1, 2, 3].map(() => (
              <div className="flex flex-col gap-16">
                <div className="item">Default</div>
                <div className="item">Hover</div>
                <div className="item">Focus</div>
                <div className="item">Press</div>
                <div className="item">Disabled</div>
              </div>
            ))}
          </div>

          <div className="grid-col-5 row-gap-7 border-primary-md border-dashed border-rounded p-2 w-full">
            <div className="flex flex-col gap-8 align-center py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-giant flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-giant flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-giant flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-giant flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-primary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* Giant end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-large flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-large flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-large flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-large flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-primary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* large end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-medium flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-medium flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-medium flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-medium flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-primary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* medium end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-small flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-small flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-small flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-small flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-primary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* small end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-tiny flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-tiny flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-tiny flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-primary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-tiny flex"
                >
                  <IconArrowUp width="1.25rem" height="1.25rem" color="#fff" />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-primary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-primary-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* tiny end */}
            {/* primary end */}

            <div className="flex flex-col gap-8 align-center py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-secondary-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* Giant end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-secondary-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* large end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-secondary-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* medium end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-secondary-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* small end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-secondary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-secondary-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-secondary-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* tiny end */}
            {/* secondary end */}

            <div className="flex flex-col gap-8 align-center py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-third-giant flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-giant flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* Giant end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-third-large flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-large flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* large end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-third-medium flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-medium flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* medium end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-third-small flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-small flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* small end */}

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  title="Click me"
                  className={`button-third-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#4e61f6"
                  />
                </Button>
              </div>
              <div className="flex gap-2 align-center">
                <Button
                  disabled={true}
                  title="Click me"
                  className={`button-third-tiny flex align-center gap-2`}
                  onClick={() => console.log("click")}
                >
                  <IconArrowLeft
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  Button
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  disabled={true}
                  title="Click me"
                  onClick={() => console.log("click")}
                  className="icon-third-tiny flex"
                >
                  <IconArrowUp
                    width="1.25rem"
                    height="1.25rem"
                    color="#9ea2ae"
                  />
                </Button>
              </div>
            </div>
            {/* tiny end */}
            {/* third end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonExample;
