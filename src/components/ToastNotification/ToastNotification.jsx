import { Toaster } from 'react-hot-toast';

export default function MessageError() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 3000,
        style: {
          border: '2px solid ##e71c30',
        },
      }}
    />
  );
}
