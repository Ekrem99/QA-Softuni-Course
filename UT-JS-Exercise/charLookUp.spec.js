import { lookupChar } from "./charLookUp.js";
import { expect } from "chai";

describe("lookupChar", () => {
    
    it("should return undefined when first parameter is from incorrect type and second parameter is correct type", () =>{
        //Arrange
        const incorrectFirstParam = 123;
        const correctSecondParam = 1;
        //Act
        const undefinedResult = lookupChar(incorrectFirstParam, correctSecondParam);
        //Assert
        expect(undefinedResult).to.be.undefined;
    })

    it("should return undefined when first parameter is from correct type and second parameter is incorrect type", () =>{
        //Arrange
        const correctFirstParam = "text";
        const incorrectSecondParam = "10";
        //Act
        const undefinedResult = lookupChar(correctFirstParam, incorrectSecondParam);
        //Assert
        expect(undefinedResult).to.be.undefined;
    })
    it("should return undefined when first parameter is from correct type and second parameter is incorrect float type", () =>{
        //Arrange
        const correctFirstParam = "text";
        const incorrectFloatNumberSecondParam = "10.10";
        //Act
        const undefinedResult = lookupChar(correctFirstParam, incorrectFloatNumberSecondParam);
        //Assert
        expect(undefinedResult).to.be.undefined;
    })
    it("should return incorrect index when first parameter is from correct type and second parameter is bigger than the string length", () =>{
        //Arrange
        const correctFirstParam = "text";
        const biggerLengthSecondParam = 20;
        //Act
        const incorrectIndexResult = lookupChar(correctFirstParam, biggerLengthSecondParam);
        //Assert
        expect(incorrectIndexResult).to.be.equal("Incorrect index");
    })

    it("should return incorrect index when first parameter is from correct type and second parameter is lower than the string length", () =>{
        //Arrange
        const correctFirstParam = "text";
        const lowerLengthSecondParam = -20;
        //Act
        const incorrectIndexResult = lookupChar(correctFirstParam, lowerLengthSecondParam);
        //Assert
        expect(incorrectIndexResult).to.be.equal("Incorrect index");
    })

    it("should return correct when all the parameters are correct", () =>{
        //Arrange
        const correctFirstParam = "text";
        const correctSecondParam = 1;
        //Act
        const correctResult = lookupChar(correctFirstParam, correctSecondParam);
        //Assert
        expect(correctResult).to.be.equal("e");
    })
})