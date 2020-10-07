interface Command<T> {
  command: string;
  data: T;
}

export const createCommand = <T>(commandName: string) => {
  return {
    listener: (args: Command<T>, cb: (args: T) => void) => {
      if (args.command === commandName) {
        cb(args.data);
      }
    },
    parser: (args: T): Command<T> => {
      return {
        command: commandName,
        data: args,
      };
    },
  };
};
