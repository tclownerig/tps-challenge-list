const levels = [
  {
    placement: 1,
    name: "Stairs Of Despair",
    creator: "Boingmd",
    tps: 32767,
    verifier: "Boingmd",
    fps: "480",
    video: "MdgwQK6Zf0w",
    levelId: "Unknown",
    points: 250,
    status: "verified",
    list: "main",
    records: []
  }
];

const changelog = [
  {
    version: "1.0",
    date: "2026-04-27",
    changes: [
      "Added PRO ranking system.",
      "Added percentage-based points.",
      "Added player badges.",
      "Added player profiles.",
      "Added TPS filters.",
      "Added global stats.",
      "Added Main / Extended / Legacy list system."
    ]
  }
];

levels.sort((a, b) => a.placement - b.placement);
