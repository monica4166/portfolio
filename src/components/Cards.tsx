import { ReactElement } from "react";

interface Props {
  title: string;
  faIcon: ReactElement;
}
function Cards({ title, faIcon }: Props) {
  return (
    <>
      <div
        className="text-center container border border-success"
        style={{ height: "50vh" }}
      >
        <div className="row align-items-center" style={{ height: "50vh" }}>
          <div className="col-sm-12">
            {faIcon}
            <div style={{ padding: "10%" }}>
              <h1 style={{ fontSize: "3vh" }}>{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
