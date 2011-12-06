#$FONTFILE = "access.log";
#open(LOGFILE) or die("Could not open log file.");
my $i = 0;
foreach $line (<STDIN>) {
    chomp($line);              # remove the newline from $line.
    chop($line);
    my @a = split(/,/,$line);
    my @b = split(/:\ /,$a[0]);
    my $s = $b[1];
    $hexval = sprintf("%x", $i);
    my $output = "\"". $s . "\" : \"".$hexval."\",";
    chop($s); # "123456"
    $s = reverse($s); # "654321"
    chop($s); # "65432"
    $s = reverse($s); # "23456"
    my $o2 = "\"". $s . "\" : \"".$hexval."\",";
    $i = $i + 1;
    print $output;
    print $o2;
    print "\n";
# do line-by-line processing.
}
