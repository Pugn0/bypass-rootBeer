Java.perform(function () {
    const RootBeer = Java.use("com.scottyab.rootbeer.RootBeer");

    // Bypass de todos os métodos principais
    const methodsToBypass = [
        "isRooted",
        "isRootedWithBusyBoxCheck",
        "isRootedWithoutBusyBoxCheck",
        "checkForBinary",
        "checkForBusyBoxBinary",
        "checkForDangerousProps",
        "checkForMagiskBinary",
        "checkForNativeLibraryReadAccess",
        "checkForRWPaths",
        "checkForRootNative",
        "checkForSuBinary",
        "checkSuExists",
        "detectPotentiallyDangerousApps",
        "detectRootCloakingApps",
        "detectRootManagementApps",
        "detectTestKeys"
    ];

    methodsToBypass.forEach(function (method) {
        if (RootBeer[method]) {
            RootBeer[method].overloads.forEach(function (overload) {
                overload.implementation = function () {
                    console.log("Bypassed RootBeer: " + method);
                    return false;
                };
            });
        }
    });

    // Se quiser ver logs bonitinhos
    console.log("✅ RootBeer bypass aplicado com sucesso!");
});
