let InitModule: nkruntime.InitModule = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  initializer: nkruntime.Initializer
) {
  logger.info("Hello World!");
};

let DeleteEunji: nkruntime.InitModule = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  initializer: nkruntime.Initializer
) {
  let userId = "5fd4e73f-6233-4eaa-8eac-775116f3f997";
  try {
    nk.accountDeleteId(userId, false);
  } catch (error) {
    logger.info("$error");
  }
};
