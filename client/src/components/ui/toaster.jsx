import { useToast } from "../../hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col items-end p-4 space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm transform transition-all duration-300 
            ${toast.visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          {toast.title && (
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{toast.title}</h3>
          )}
          {toast.description && <p className="text-gray-700 dark:text-gray-300 text-sm">{toast.description}</p>}
        </div>
      ))}
    </div>
  );
}