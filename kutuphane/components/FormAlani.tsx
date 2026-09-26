interface FormAlaniProps {
  ad: string;
  etiket: string;
  tur?: string;
  varsayilan?: string;
  hata?: string;
}

export default function FormAlani({ ad, etiket, tur = "text", varsayilan, hata }: FormAlaniProps) {
  return (
    <div>
      <label htmlFor={ad} className="block font-semibold mb-1">{etiket}</label>
      <input
        id={ad}
        name={ad}
        type={tur}
        defaultValue={varsayilan}
        className={`w-full bg-white border rounded px-3 py-2 ${hata ? "border-red-500" : "border-gray-300"}`}
      />
      {hata && <p className="mt-1 text-sm text-red-600">{hata}</p>}
    </div>
  );
}
