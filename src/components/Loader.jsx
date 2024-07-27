import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <style>
        {`
          .blob {
            width: 168px; /* الحجم بعد التعديل */
            height: 168px; /* الحجم بعد التعديل */
            display: grid;
            background: #fff;
            filter: blur(5.6px) contrast(10);
            padding: 16.8px; /* الحجم بعد التعديل */
            mix-blend-mode: darken;
            position: absolute; /* يجعل العنصر يعوم فوق الصفحة */
            top: 50%; /* يتحرك للمنتصف العمودي */
            left: 50%; /* يتحرك للمنتصف الأفقي */
            transform: translate(-50%, -50%); /* يعيد العنصر لمكانه الصحيح */
          }

          .blob:before,
          .blob:after {
            content: "";
            grid-area: 1 / 1;
            width: 67.2px; /* الحجم بعد التعديل */
            height: 67.2px; /* الحجم بعد التعديل */
            background: #474bff;
            animation: blob-rhf26m 2s infinite;
          }

          .blob:after {
            animation-delay: -1s;
          }

          @keyframes blob-rhf26m {
            0% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(100%, 0);
            }
            50% {
              transform: translate(100%, 100%);
            }
            75% {
              transform: translate(0, 100%);
            }
            100% {
              transform: translate(0, 0);
            }
          }
        `}
      </style>
      <div className="blob"></div>
    </Html>
  );
};

export default Loader;
