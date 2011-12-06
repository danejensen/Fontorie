#!/usr/bin/perl -w
# hexadec.pl

print "hexa converter\n\nPlease enter a number: ";
$foo = <STDIN>;
$hexval = sprintf("%x", $foo);
$decval = hex($hexval);
print "\n$foo in hex is $hexval and in dec is $decval\n";
