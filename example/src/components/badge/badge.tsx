import { Badge } from "@ds.e/react";
import { IconX } from "../../assets/icons";

function BadgeExample() {
  return (
    <>
      <h3 className="h3 semibold text-gray-900">Badge & Chip</h3>
      <div className="mt-14">
        <ul className="grid-col-3 mb-10 justify-items-center justify-self-end w-11_12">
          <li className="">Large</li>
          <li className="">Small</li>
          <li className="">Tiny</li>
        </ul>

        <div className="flex gap-10 justify-between">
          <div className="flex flex-col mt-10">
            <div className="flex flex-col gap-14">
              <div className="item">Default</div>
              <div className="item">Success</div>
              <div className="item">Info</div>
              <div className="item">Warning</div>
              <div className="item">Error</div>
            </div>
          </div>

          <div className="grid-col-6 row-gap-7 border-primary-md border-dashed border-rounded p-2 w-full">
            <div className="flex flex-col gap-8 align-start justify-between py-4">
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large badge-success"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large badge-success"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large badge-info"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large badge-info"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large badge-warning"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large badge-warning"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large badge-error"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-large badge-error"
                  isIcon={true}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 align-start justify-between py-4">
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large badge-success"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large badge-success"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large badge-info"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large badge-info"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large badge-warning"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large badge-warning"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large badge-error"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-large badge-error"
                  isIcon={true}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small badge-success"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small badge-success"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small badge-info"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small badge-info"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small badge-warning"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small badge-warning"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small badge-error"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-small badge-error"
                  isIcon={true}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 align-center justify-between py-4">
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small badge-success"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small badge-success"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small badge-info"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small badge-info"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small badge-warning"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small badge-warning"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small badge-error"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-small badge-error"
                  isIcon={true}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-8 align-end justify-between py-4">
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny badge-success"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny badge-success"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny badge-info"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny badge-info"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny badge-warning"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny badge-warning"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny badge-error"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-primary-tiny badge-error"
                  isIcon={true}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 align-end justify-between py-4">
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny badge-success"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny badge-success"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny badge-info"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny badge-info"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny badge-warning"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny badge-warning"
                  isIcon={true}
                />
              </div>
              <div className="flex gap-2 align-center">
                <Badge
                  title="Badge"
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny badge-error"
                >
                  <IconX width="24" height="24" />
                </Badge>
                <Badge
                  onClick={() => console.log("clicked")}
                  className="badge-secondary-tiny badge-error"
                  isIcon={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BadgeExample;
