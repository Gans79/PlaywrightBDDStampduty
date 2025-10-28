/** Generated from: features/motor-vehicle.feature */
import { test } from "playwright-bdd";

test.describe("Nsw Gov Motor Vehicle Stamp Duty", () => {

  test.describe("Revenue NSW Motor vehicle calculator check online", () => {

    test("Example #1", { tag: ["@demo", "@TC01"] }, async ({ Given, page, When, Then }) => {
      await Given("Navigate to motor vehicle stamp duty via 'https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty'", null, { page });
      await When("I click on 'Check online' on the stamp duty page", null, { page });
      await Then("User is landed on the calculator page", null, { page });
    });

  });

  test.describe("Revenue NSW Motor vehicle calculator verify duty", () => {

    test("Example #1", { tag: ["@demo", "@TC02"] }, async ({ Given, page, When, Then }) => {
      await Given("Navigate to motor vehicle stamp duty via 'https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty'", null, { page });
      await When("I click on 'Check online' on the stamp duty page", null, { page });
      await Then("User is landed on the calculator page", null, { page });
      await When("User clicks '<radios>' and enters purchase 40000 and clicks calculate", null, { page });
      await Then("Pop up calculation window is shown with $40,000.00 and $1,200.00", null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features/motor-vehicle.feature"),
  $workerHookFixtures: [({ browser }, use) => use({ browser }), { scope: "worker" }],
});

const testMetaMap = {
  "Revenue NSW Motor vehicle calculator check online|Example #1": {"pickleLocation":"13:9","tags":["@demo","@TC01"]},
  "Revenue NSW Motor vehicle calculator verify duty|Example #1": {"pickleLocation":"27:9","tags":["@demo","@TC02"]},
};