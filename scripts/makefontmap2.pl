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
    my $o2 = "\"". $s . "\" : \"".$hexval."\",";
    $i = $i + 1;
    print $s;
    print ", ";

# do line-by-line processing.
}
