import allowedOrigins from "./allowed-origins";
interface CorsOptions {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, success: boolean) => void
  ) => void;
  credentials: boolean;
  optionsSuccessStatus: number;
}

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
