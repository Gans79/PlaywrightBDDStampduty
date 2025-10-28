@demo
Feature: Nsw Gov Motor Vehicle Stamp Duty  
    Motor Vehicle registration duty calculator

@TC01
Scenario Outline: Revenue NSW Motor vehicle calculator check online  
    Given Navigate to motor vehicle stamp duty via '<url>'
    When I click on '<button>' on the stamp duty page 
    Then User is landed on the calculator page 

    Examples:
        | url                                                                         | button       | 
        | https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty   | Check online | 

@TC02
Scenario Outline: Revenue NSW Motor vehicle calculator verify duty
    Given Navigate to motor vehicle stamp duty via '<url>'
    When I click on '<button>' on the stamp duty page 
    Then User is landed on the calculator page 
    When User clicks '<radios>' and enters purchase <purchase price> and clicks calculate
    Then Pop up calculation window is shown with <value> and <duty payable>

    Examples:
        | url                                                                         | button       | radio | purchase price  | duty payable  | value      | 
        | https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty   | Check online | Yes   | 40000           | $1,200.00    | $40,000.00 | 