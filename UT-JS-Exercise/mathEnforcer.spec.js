import { mathEnforcer } from "./mathEnforcer.js";
import { expect } from "chai"

describe ("mathEnforcer", () => {
    describe("addFive", () => {
        it("should return undefined when pass string as input", () => {
            //Arrange
            const stringInput = "someString";
            //Act
            const undefinedResult = mathEnforcer.addFive(stringInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it("should return undefined when pass undefined as input", () => {
            //Arrange
            const undefinedInput = undefined;
            //Act
            const undefinedResult = mathEnforcer.addFive(undefinedInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it("should return undefined when pass number as string as input", () =>{
            //Arrange
        const numberAsStringInput = "5";
        //Act
        const undefinedResult = mathEnforcer.addFive(numberAsStringInput);
        //Assert
        expect(undefinedResult).to.be.undefined;
        })
        it("should return correct when pass floating number as input and assert with closeTo", () =>{
        //Arrange
        const floatingInput = 1.01;
        //Act
        const correctResult = mathEnforcer.addFive(floatingInput);
        //Assert
        expect(correctResult).to.be.closeTo(6.01, 0.01);
        })
        it("should return correct when pass floating number as input and assert with equal", () =>{
            //Arrange
            const floatingInput = 1.01;
            //Act
            const correctResult = mathEnforcer.addFive(floatingInput);
            //Assert
            expect(correctResult).to.be.equal(6.01);
            })
        it("should return correct when pass floating number with a lot of digits as input and assert with closeTo", () =>{
            //Arrange
            const floatingInput = 1.0000001;
            //Act
            const correctResult = mathEnforcer.addFive(floatingInput);
            //Assert
            expect(correctResult).to.be.closeTo(6.01, 0.01);
            })
        it("should return correct result when pass number as input", () =>{
            //Arrange
            const numberInput = 5;
            //Act
            const correctResult = mathEnforcer.addFive(numberInput);
            //Assert
            expect(correctResult).to.be.equal(10);
            })
        it("should return correct result when pass negative number as input", () =>{
            //Arrange
            const negativenumberInput = -15;
            //Act
            const correctResult = mathEnforcer.addFive(negativenumberInput);
            //Assert
            expect(correctResult).to.be.equal(-10);
            })
    })
    describe("substractTen", () => {
        it("should return undefined when pass string as input", () => {
            //Arrange
            const stringInput = "someString";
            //Act
            const undefinedResult = mathEnforcer.subtractTen(stringInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it("should return undefined when pass undefined as input", () => {
            //Arrange
            const undefinedInput = undefined;
            //Act
            const undefinedResult = mathEnforcer.subtractTen(undefinedInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it("should return undefined when pass number as string as input", () =>{
            //Arrange
        const numberAsStringInput = "5";
        //Act
        const undefinedResult = mathEnforcer.subtractTen(numberAsStringInput);
        //Assert
        expect(undefinedResult).to.be.undefined;
        })
        it("should return correct when pass floating number as input and assert with closeTo", () =>{
        //Arrange
        const floatingInput = 1.01;
        //Act
        const correctResult = mathEnforcer.subtractTen(floatingInput);
        //Assert
        expect(correctResult).to.be.closeTo(-8.99, 0.01);
        })
        it("should return correct when pass floating number as input and assert with equal", () =>{
            //Arrange
            const floatingInput = 1.01;
            //Act
            const correctResult = mathEnforcer.subtractTen(floatingInput);
            //Assert
            expect(correctResult).to.be.equal(-8.99);
            })
        it("should return correct when pass floating number with a lot of digits as input and assert with closeTo", () =>{
            //Arrange
            const floatingInput = 16.0000001;
            //Act
            const correctResult = mathEnforcer.subtractTen(floatingInput);
            //Assert
            expect(correctResult).to.be.closeTo(6.01, 0.01);
            })
        it("should return correct result when pass number as input", () =>{
            //Arrange
            const numberInput = 20;
            //Act
            const correctResult = mathEnforcer.subtractTen(numberInput);
            //Assert
            expect(correctResult).to.be.equal(10);
            })
        it("should return correct result when pass negative number as input", () =>{
            //Arrange
            const negativenumberInput = -15;
            //Act
            const correctResult = mathEnforcer.subtractTen(negativenumberInput);
            //Assert
            expect(correctResult).to.be.equal(-25);
            })
    })
    describe("sum", () => {
        it("should return undefined when Param1: string and Param2: number", () => {
            //Arrange
            const incorrectFirstParam = "Sth";
            const correctSecondParam = 5;
            //Act
            const undefinedResults = mathEnforcer.sum(incorrectFirstParam, correctSecondParam)
            //Assert
            expect(undefinedResults).to.be.undefined;
        })
        it("should return undefined when Param1: number and Param2: string", () => {
            //Arrange
            const correctFirstParam = 5;
            const incorrectSecondParam = "Sth";
            //Act
            const undefinedResults = mathEnforcer.sum(correctFirstParam, incorrectSecondParam)
            //Assert
            expect(undefinedResults).to.be.undefined;
        })
        it("should return undefined when Param1: number as string and Param2: number", () => {
            //Arrange
            const numberAsStringFirstParam = '5';
            const correctSecondParam = 5;
            //Act
            const undefinedResults = mathEnforcer.sum(numberAsStringFirstParam, correctSecondParam)
            //Assert
            expect(undefinedResults).to.be.undefined;
        })
        it("should return correct when Param1: number and Param2: number", () => {
            //Arrange
            const correctFirstParam = 5;
            const correctSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(correctFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.equal(10);
        })
        it("should return correct when Param1: negative number and Param2: negative number", () => {
            //Arrange
            const correctFirstParam = -5;
            const correctSecondParam = -5;
            //Act
            const correctResult = mathEnforcer.sum(correctFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.equal(-10);
        })
        it("should return correct when Param1: floating number and Param2: number with equal", () => {
            //Arrange
            const floatingNumberFirstParam = 5.01;
            const correctSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(floatingNumberFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.equal(10.01);
        })
        it("should return correct when Param1: floating number and Param2: number with closeTo", () => {
            //Arrange
            const floatingNumberFirstParam = 5.01;
            const correctSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(floatingNumberFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.closeTo(10.01, 1.01);
        })
        it("should return correct when Param1: negative floating number and Param2: negativenumber with equal", () => {
            //Arrange
            const negativeFloatingNumberFirstParam = -5.01;
            const correctSecondParam = -5;
            //Act
            const correctResult = mathEnforcer.sum(negativeFloatingNumberFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.equal(-10.01);
        })
        it("should return correct when Param1: floating number and Param2: negative number with closeTo", () => {
            //Arrange
            const negativeFloatingNumberFirstParam = -5.01;
            const correctSecondParam = -5;
            //Act
            const correctResult = mathEnforcer.sum(negativeFloatingNumberFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.closeTo(-10.01, 1.01);
        })
    })
})