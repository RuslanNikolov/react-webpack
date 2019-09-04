//@ts-ignore
import pics from "./assets";

interface ITag {
  readonly name: string;
  readonly color: string;
}

export interface IIssueCardMock {
  readonly profilePicUrl: string;
  readonly title: string;
  readonly subTitle: string;
  readonly description: string;
  readonly ProfilePictureUrl?: string;
  readonly tags: ITag[];
}

const IssueCardsMock: IIssueCardMock[] = [
  {
    profilePicUrl: pics.ProfilePic_1,
    title: "Throw error while generating type and mutation base on mongoose schema",
    subTitle: "#111: opened by John Doe",
    description:
      "Description text At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    tags: [{ name: "actionpack", color: "#CB4CB6" }, { name: "react", color: "#2E7DFB" }]
  },
  {
    profilePicUrl: pics.ProfilePic_2,
    title: "[react-hooks/exhaustive-deps] False positive firing",
    subTitle: "#311: opened by John Doe",
    description:
      "Description text At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati. .",
    tags: [{ name: "actionpack", color: "#CB4CB6" }]
  },
  {
    profilePicUrl: pics.ProfilePic_3,
    title: "Cannot preventDefault input[type=number] onWheel event in Chrome",
    subTitle: "#9423: opened by John Doe",
    description:
      "Description text At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    tags: [{ name: "actionpack", color: "#CB4CB6" }]
  },
  {
    profilePicUrl: pics.ProfilePic_4,
    title: "Cannot preventDefault input[type=number] onWheel event in Chrome ",
    subTitle: "#9423: opened by John Doe",
    description:
      "Description text At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    tags: [{ name: "actionpack", color: "#CB4CB6" }]
  }
];

export default IssueCardsMock;
