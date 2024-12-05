import { Button } from "@ds.e/react";
import { IconArrowLeft, IconArrowRight, IconArrowUp } from "../../assets/icons";

function ButtonGroupExample() {
  return (
    <>
      <h3 className="h3 semibold text-gray-900">Buttons Group</h3>

      <div className="mt-14">
        {/* <ul className="flex gap-16 justify-end mb-4"> */}
        <ul className="grid-col-2 mb-10 justify-items-center justify-self-end w-11_12">
          <li className="s1 semibold">Button Group</li>
          <li className="s1 semibold">Icon Group</li>
        </ul>

        <div className="flex gap-10 justify-between">
          <div className="grid-col-5 row-gap-7 border-primary-md border-dashed border-rounded p-2 w-full">
            <div className="flex flex-col gap-8 py-4 item-span-3">
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>

                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-giant flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 py-4 item-span-2">
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowUp color="#fff" width="1.25rem" height="1.25rem" />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowUp color="#fff" width="1.25rem" height="1.25rem" />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-giant flex"
                >
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 py-4 item-span-3">
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>

                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-large flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 py-4 item-span-2">
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowUp color="#fff" width="1.25rem" height="1.25rem" />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowUp color="#fff" width="1.25rem" height="1.25rem" />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-large flex"
                >
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 py-4 item-span-3">
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                  disabled={true}
                >
                  Hello world
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="button-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>

                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="button-group-medium flex align-center gap-2"
                >
                  Hello world
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-8 py-4 item-span-2">
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowUp color="#fff" width="1.25rem" height="1.25rem" />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowUp color="#fff" width="1.25rem" height="1.25rem" />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowUp
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                  disabled={true}
                >
                  <IconArrowRight
                    color="#9ea2ae"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
              <div className="icon-group">
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowLeft
                    color="#4e61f6"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
                <Button
                  title="Button"
                  onClick={() => console.log("clicked")}
                  className="icon-group-medium flex"
                >
                  <IconArrowRight
                    color="#fff"
                    width="1.25rem"
                    height="1.25rem"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonGroupExample;
