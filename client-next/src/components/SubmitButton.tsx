import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex items-center justify-center gap-2 p-2 outline-none w-[8rem] transition-all group hover:scale-105 disabled:bg-opacity-75"
      type="submit"
      disabled={pending}
      id="button"
    >
      {" "}
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar{" "}
          <FaPaperPlane
            size={15}
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </>
      )}
    </button>
  );
}
