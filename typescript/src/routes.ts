import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "larabeatriz@rocketseat.com.br",
    password: "12345",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      //   {
      //     title: "Javascript",
      //     experience: 100,
      //   },
    ],
  });

  return response.json({ message: "Hello Lara" });
}
