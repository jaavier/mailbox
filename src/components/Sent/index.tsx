import mails from "../../mocks/mails";
import PreviewMail from "../Inbox/PreviewMail";

export default function Sent() {
  return (
    <div>
      {mails.map((mail: Mail, index: number) => (
        <PreviewMail {...mail} key={index} />
      ))}

    </div>
  );
}