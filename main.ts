let i = 0
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.cardTotalNum() > 0) {
        if (PlanetX_AILens.CardData(PlanetX_AILens.Cardstatus.Size) < 140) {
            i = PlanetX_AILens.CardData(PlanetX_AILens.Cardstatus.X)
            if (i < 100) {
                neZha.setMotorSpeed(neZha.MotorList.M4, 10)
                neZha.setMotorSpeed(neZha.MotorList.M1, 0)
            }
            if (i > 160) {
                neZha.setMotorSpeed(neZha.MotorList.M1, 10)
                neZha.setMotorSpeed(neZha.MotorList.M4, 0)
            }
            if (i < 160 && i > 100) {
                neZha.setMotorSpeed(neZha.MotorList.M4, 20)
                neZha.setMotorSpeed(neZha.MotorList.M1, 20)
            }
        } else {
            neZha.stopAllMotor()
            if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.turnright)) {
                neZha.setMotorSpeed(neZha.MotorList.M4, -50)
                neZha.setMotorSpeed(neZha.MotorList.M1, 40)
                basic.pause(600)
                neZha.stopAllMotor()
                basic.pause(500)
                for (let index = 0; index < 3; index++) {
                    PlanetX_AILens.cameraImage()
                }
            }
            if (PlanetX_AILens.trafficCard(PlanetX_AILens.trafficCards.stop)) {
                neZha.stopAllMotor()
                for (let index = 0; index < 3; index++) {
                    PlanetX_AILens.cameraImage()
                }
            }
        }
    } else {
        neZha.setMotorSpeed(neZha.MotorList.M4, 20)
        neZha.setMotorSpeed(neZha.MotorList.M1, 20)
    }
})
