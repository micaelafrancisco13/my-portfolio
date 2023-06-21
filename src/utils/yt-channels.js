const ytChannels = [
  {
    name: "Programming with Mosh",
    avatarFileName: "Programming_with_Mosh.png",
    alt: "Programming with Mosh's YouTube channel",
  },
  {
    name: "Fireship",
    avatarFileName: "Fireship.png",
    alt: "Fireship's YouTube channel",
  },
  {
    name: "Theo - t3.gg",
    avatarFileName: `Theo_T3.png`,
    alt: "Theo - t3.gg's YouTube channel",
  },
  {
    name: "Lex Fridman",
    avatarFileName: "Lex_Fridman.png",
    alt: "Lex Fridman's YouTube channel",
  },
  {
    name: "Jeremy's IT Lab",
    avatarFileName: `Jeremy's_IT_Lab.png`,
    alt: "Jeremy's IT Lab's YouTube channel",
  },
  {
    name: "NetworkChuck",
    avatarFileName: "NetworkChuck.png",
    alt: "NetworkChuck's YouTube channel",
  },
  {
    name: "Byte Byte Go",
    avatarFileName: "Byte_Byte_Go.png",
    alt: "Byte Byte Go's YouTube channel",
  },
  {
    name: "IBM Technology",
    avatarFileName: "IBM_Technology.png",
    alt: "IBM Technology's YouTube channel",
  },
];

const INITIAL_TIMEOUT = 850;

export function getYtChannels() {
  let timeout = INITIAL_TIMEOUT;
  return ytChannels.map((channel) => {
    channel.timeout = timeout;
    timeout += INITIAL_TIMEOUT;
    return channel;
  });
}
